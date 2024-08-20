'use client'
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import Image from 'next/image';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useToast } from './ui/use-toast';
import { Spinner } from './ui/spinner';

export function ContactForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

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

        setLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                console.log('Email sent successfully', response);
                closeModal();
                setLoading(false);
                setName('');
                setEmail('');
                setMessage('');
                toast({ description: '🥳 Your email has been sent successfully! We will get back to you shortly.' });
            } else {
                // Handle errors, e.g., show an error message
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Dialog open={isOpen} onOpenChange={closeModal}>
                <DialogContent className="sm:max-w-[625px] overflow-y-auto items-start justify-start h-full sm:h-auto bg-white text-slate-700">
                    <DialogHeader className='justify-start sm:flex hidden ml-auto mb-0 pb-0 '>
                        <div className='mr-auto mb-6 rounded-full -mt-3 pr-1 w-20 flex items-start justify-start h-20'>
                            <Image src="/gs3.svg" alt="Golden State Web Design" className='opacity-90 hidden sm:flex' width={65} height={65} />
                        </div>
                        <DialogTitle>Let's Connect!</DialogTitle>
                        <DialogDescription className='text-sm pt-3'>
                            Let's connect! We're excited to hear about your project! Please fill out the form below and we'll get back to you as soon as we possible.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogHeader className='justify-center sm:hidden flex mx-auto pt-8 mb-0 pb-0'>
                        <div className='mx-auto'>
                            <Image src="/gs3.svg" alt="Golden State Web Design" className='opacity-90 lg:hidden ml-3 flex' width={55} height={55} />
                        </div>
                        <DialogTitle className='py-4 px-0'>How can we reach you?</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-5 py-4 pt-8">
                            <div className="w-full">
                                <Label className="text-slate-700 text-xs pb-3">Name<span className='text-red-500 pl-1'>*</span></Label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full bg-slate-50 border-slate-300"
                                    autoComplete='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="w-full">
                                <Label className="text-slate-700 text-xs pb-3">Email<span className='text-red-500 pl-1'>*</span></Label>
                                <Input
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full bg-slate-50 border-slate-300"
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="w-full">
                                <Label className="text-slate-700 text-xs pb-3">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Is there anything else we should know?"
                                    className="w-full bg-slate-50 border-slate-300 " 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <DialogFooter className='pt-6'>
                            <Button type="submit" variant="default" className='bg-slate-900 hover:bg-slate-900/90  w-full text-white'>
                                {loading && <Spinner size="small" className='mr-2' />}
                                {loading ? 'Processing...' : 'Submit'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Suspense>
    );
}