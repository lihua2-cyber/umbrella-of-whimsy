import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft, Biohazard, CheckCircle } from "lucide-react";
import UmbrellaLogo from "@/components/UmbrellaLogo";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    country: "",
    program: "",
    previousEducation: "",
    gpa: "",
    statement: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    nextOfKinRelation: "",
    agreeTerms: false,
    agreeExperimental: false,
    agreeNDA: false,
  });

  const programs = [
    "B.S. in Viral Engineering",
    "B.S. in Biochemical Weaponry",
    "M.S. in Genetic Modification",
    "M.S. in Thanatology",
    "Ph.D. in Necrotic Sciences",
    "Ph.D. in Behavioral Modification",
    "Certificate in Containment Protocols",
    "Certificate in Biohazard Management",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms || !formData.agreeExperimental || !formData.agreeNDA) {
      toast({
        title: "Agreement Required",
        description: "You must agree to all terms before submitting your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "Your application has been received. We will contact you shortly... if you're suitable.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="pt-8 pb-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Application Received</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in Umbrella University. Your application has been 
              forwarded to our Admissions & Screening Department. You will receive a response 
              within 5-7 business days, pending background verification and psychological evaluation.
            </p>
            <p className="text-xs text-muted-foreground italic mb-6">
              Please do not attempt to contact us regarding your application status. 
              We will find you when we're ready.
            </p>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <UmbrellaLogo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-foreground">UMBRELLA</span>
              <span className="text-xs text-muted-foreground -mt-1">UNIVERSITY</span>
            </div>
          </button>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Application Form */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Biohazard className="w-4 h-4" />
              <span className="text-sm font-medium">Spring 2026 Admissions Open</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Application Form</h1>
            <p className="text-muted-foreground">
              Complete all fields accurately. Falsified information will result in immediate termination... 
              of your application.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input
                    id="dob"
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Country of residence"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street address, City, State/Province, Postal Code"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="program">Desired Program *</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousEducation">Previous Education *</Label>
                  <Input
                    id="previousEducation"
                    required
                    value={formData.previousEducation}
                    onChange={(e) => setFormData({ ...formData, previousEducation: e.target.value })}
                    placeholder="e.g., B.S. in Biology, MIT"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA (4.0 scale) *</Label>
                  <Input
                    id="gpa"
                    required
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    placeholder="e.g., 3.8"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="statement">Personal Statement *</Label>
                  <Textarea
                    id="statement"
                    required
                    rows={5}
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Describe your interest in advancing humanity through unconventional scientific methods. Include any relevant experience with controlled substances, infectious agents, or classified research. (500 words max)"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Next of Kin Information
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Required for all applicants. This information will be used in the unlikely event of 
                  laboratory incidents.
                </p>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinName">Full Name *</Label>
                  <Input
                    id="nextOfKinName"
                    required
                    value={formData.nextOfKinName}
                    onChange={(e) => setFormData({ ...formData, nextOfKinName: e.target.value })}
                    placeholder="Emergency contact name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinPhone">Phone Number *</Label>
                  <Input
                    id="nextOfKinPhone"
                    type="tel"
                    required
                    value={formData.nextOfKinPhone}
                    onChange={(e) => setFormData({ ...formData, nextOfKinPhone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nextOfKinRelation">Relationship *</Label>
                  <Input
                    id="nextOfKinRelation"
                    required
                    value={formData.nextOfKinRelation}
                    onChange={(e) => setFormData({ ...formData, nextOfKinRelation: e.target.value })}
                    placeholder="e.g., Parent, Spouse"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Agreements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Terms & Agreements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed cursor-pointer">
                    I confirm that all information provided is accurate and complete. I understand that 
                    falsification may result in immediate dismissal and potential legal action. *
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeExperimental"
                    checked={formData.agreeExperimental}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeExperimental: checked as boolean })}
                  />
                  <Label htmlFor="agreeExperimental" className="text-sm leading-relaxed cursor-pointer">
                    I consent to potential exposure to experimental compounds, pathogens, and 
                    unclassified biological agents as part of my education. I waive all rights to 
                    legal action against Umbrella Corporation and its subsidiaries. *
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeNDA"
                    checked={formData.agreeNDA}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeNDA: checked as boolean })}
                  />
                  <Label htmlFor="agreeNDA" className="text-sm leading-relaxed cursor-pointer">
                    I agree to sign a Non-Disclosure Agreement upon acceptance. I understand that 
                    unauthorized disclosure of research activities may result in "corrective measures." *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex flex-col items-center gap-4">
              <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                Submit Application
              </Button>
              <p className="text-xs text-muted-foreground text-center max-w-md">
                For inquiries, contact our Admissions Office at{" "}
                <a href="mailto:admissions@umbrella.edu.kg" className="text-primary hover:underline">
                  admissions@umbrella.edu.kg
                </a>{" "}
                or call{" "}
                <a href="tel:+996-555-0199" className="text-primary hover:underline">
                  +996 555 0199
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Umbrella University. A division of Umbrella Corporation.</p>
          <p className="text-xs mt-1">
            Campus Address: 42 Research Drive, Bishkek, Kyrgyzstan | info@umbrella.edu.kg
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Apply;
