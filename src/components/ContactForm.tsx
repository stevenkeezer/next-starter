'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import Image from 'next/image';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-dropdown-menu';

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
            <DialogContent className="sm:max-w-[425px] overflow-y-auto items-start justify-start border-t-8 border-blue-400 h-full sm:h-auto bg-slate-50 text-slate-700">
                <DialogHeader className='justify-center sm:flex hidden mx-auto mb-0 pb-0 '>
                    <div className='mx-auto'>
                    <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90 mb-10 pl-2' width={143} height={143} />
                </div>
                    <DialogTitle>Let's Connect!</DialogTitle>
                    <DialogDescription className='text-sm pt-6'>
                        We're excited to hear about your project! Please fill out the form below and we'll get back to you as soon as we can. Your thoughts and questions are important to us. Thank you!
                    </DialogDescription>
                </DialogHeader>

                <DialogHeader className='justify-center sm:hidden flex mx-auto mb-0 pb-0'>
                    <div className='mx-auto'>
                    <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90 mb-8 pl-2' width={123} height={123} />
                </div>
                    <DialogTitle>Let's Connect!</DialogTitle>
                    <DialogDescription className='text-xs pt-3'>
                        We're excited to hear about your project! Please fill out the form below and we'll get back to you as soon as we can. 
                    </DialogDescription>
                </DialogHeader>
            

                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4 pt-10">
                        <div className="w-full">
                            <Label className="text-slate-700 text-xs pb-3">Name</Label>
                            <Input
                                id="name"
                                placeholder="Jane Doe"
                                className="w-full bg-slate-50"
                                autoComplete='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-slate-700 text-xs pb-3">Email</Label>
                            <Input
                                id="email"
                                placeholder="janedoe@email.com"
                                className="w-full bg-slate-50"
                                autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <Label className="text-slate-700 text-xs pb-3">Message (optional)</Label>
                            <Textarea
                                id="message"
                                placeholder="Your message here..."
                                className="w-full bg-slate-50"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter className='pt-4'>
                        <Button type="submit" variant="default" className='bg-blue-400 w-full text-white hover:bg-blue-300'>Send</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
