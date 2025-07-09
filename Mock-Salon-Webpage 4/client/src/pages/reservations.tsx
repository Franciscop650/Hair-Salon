import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import HeroSection from "@/components/hero-section";
import ContactInfo from "@/components/contact-info";
import { Calendar, CreditCard, Info } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Reservations() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      stylist: "",
      date: "",
      time: "",
      specificService: "",
      specialRequests: "",
      newClient: false,
    },
  });

  const createReservationMutation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      const response = await apiRequest("POST", "/api/reservations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Reservation Submitted",
        description: "Thank you! Your reservation request has been submitted. We will contact you within 24 hours to confirm your appointment.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit reservation. Please try again.",
        variant: "destructive",
      });
      console.error("Reservation error:", error);
    },
  });

  const onSubmit = (data: InsertReservation) => {
    createReservationMutation.mutate(data);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    { value: "9:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
  ];

  const serviceCategories = [
    { value: "hair", label: "Hair Services" },
    { value: "beauty", label: "Beauty Treatments" },
    { value: "nails", label: "Nail Services" },
    { value: "package", label: "Special Package" },
  ];

  const stylists = [
    { value: "sarah", label: "Sarah Johnson" },
    { value: "maria", label: "Maria Rodriguez" },
    { value: "jessica", label: "Jessica Chen" },
    { value: "amanda", label: "Amanda Thompson" },
  ];

  return (
    <div className="pt-16">
      {/* Reservation Hero */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        title={t('reservations.hero.title')}
        subtitle={t('reservations.hero.subtitle')}
        height="50vh"
      />

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="pricing-card">
              <h2 className="playfair text-3xl font-bold text-center mb-8">{t('reservations.form.title')}</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Category *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceCategories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="stylist"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Stylist</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="No preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="no-preference">No preference</SelectItem>
                              {stylists.map((stylist) => (
                                <SelectItem key={stylist.value} value={stylist.value}>
                                  {stylist.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date *</FormLabel>
                          <FormControl>
                            <Input type="date" min={today} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot.value} value={slot.value}>
                                  {slot.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specificService"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Service Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe the specific services you'd like (e.g., cut and color, facial type, nail art design, etc.)"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requests or Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any allergies, special requests, or additional information we should know"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="newClient"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I am a new client</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <Checkbox required />
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the cancellation policy and consent to being contacted for appointment confirmation *
                      </FormLabel>
                    </div>
                  </FormItem>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      className="btn-primary-custom px-8 py-3 text-lg"
                      disabled={createReservationMutation.isPending}
                    >
                      {createReservationMutation.isPending ? "Submitting..." : "Submit Reservation Request"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactInfo icon={Calendar} title="Booking Information">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">⏰</span>
                  Appointments required for all services
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">⏰</span>
                  24-hour cancellation policy
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">⏰</span>
                  15-minute grace period for late arrivals
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">⏰</span>
                  Consultation available for new clients
                </li>
              </ul>
            </ContactInfo>

            <ContactInfo icon={CreditCard} title="Payment & Policies">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Cash, Credit, and Debit accepted
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  18% gratuity appreciated
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Package deals available
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Gift certificates offered
                </li>
              </ul>
            </ContactInfo>
          </div>
          
          <div className="mt-8">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-base">
                <strong>Appointment Confirmation:</strong> After submitting your reservation request, our team will contact you within 24 hours to confirm your appointment and discuss any specific requirements. For immediate assistance, please call us at (555) 123-4567.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
}
