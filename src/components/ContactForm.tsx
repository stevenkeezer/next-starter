'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';

export function ContactForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (searchParams.get('open') === 'dialog') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [searchParams]);

    const closeModal = () => {
        setIsOpen(false);
        const params = new URLSearchParams(window.location.search);
        params.delete('open');
        window.history.pushState(null, '', `?${params.toString()}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(message, email, name, "ST/uf")
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            //   console.log('hit', response)

            if (response.ok) {
                console.log('Email sent successfully', response);
                // Handle success, e.g., show a success message or close the dialog
                closeModal();
                // reset form
                setName('');
                setEmail('');
                setMessage('');
            } else {
                // Handle errors, e.g., show an error message
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[425px] bg-white text-slate-700">
                <DialogHeader>
                    <DialogTitle>Get in touch with us!</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="w-full">
                            <Input
                                id="name"
                                placeholder="Your name"
                                className="w-full bg-slate-50"
                                autoComplete='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                id="email"
                                placeholder="your@email.com"
                                className="w-full bg-slate-50"
                                autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <Textarea
                                id="message"
                                placeholder="Your message"
                                className="w-full bg-slate-50"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" variant="default" className='bg-blue-400 w-full text-white hover:bg-blue-300'>Send</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
