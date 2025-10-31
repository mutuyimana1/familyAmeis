import { AppointmentForm } from "@/components/appointment-form";
import PageHeader from "@/components/page-header";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <>
             <PageHeader
                title="Contact Us"
                breadcrumb="Contact"
                imageUrl="/images/page-header.jpg"
                imageHint="family tools"
            />
            <div className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                             <div>
                                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                                <p className="text-muted-foreground text-lg">
                                    We would love to hear from you. Whether you have a question about our services, need to book an appointment, or just want to say hello, feel free to reach out.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent rounded-full p-3">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-headline font-semibold text-xl text-primary">Our Location</h3>
                                        <p className="text-muted-foreground">AFR kigali nyarugenge</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent rounded-full p-3">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-headline font-semibold text-xl text-primary">Phone Number</h3>
                                        <p className="text-muted-foreground">(250) 788 226 986</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent rounded-full p-3">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-headline font-semibold text-xl text-primary">Email Address</h3>
                                        <p className="text-muted-foreground">info@afr.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <AppointmentForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}