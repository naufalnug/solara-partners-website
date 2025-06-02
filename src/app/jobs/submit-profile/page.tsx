"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Upload, X } from "lucide-react";
import Link from "next/link";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  jobTitle: string;
  experience: string;
  skills: string;
  linkedin: string;
  resume: File | null;
  coverLetter: File | null;
  jobType: string;
  salary: string;
  availability: string;
  privacyConsent: boolean;
}

export default function SubmitProfilePage() {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
    experience: "",
    skills: "",
    linkedin: "",
    resume: null,
    coverLetter: null,
    jobType: "",
    salary: "",
    availability: "",
    privacyConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ProfileData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Current location is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Current job title is required";
    if (!formData.experience) newErrors.experience = "Years of experience is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.privacyConsent) newErrors.privacyConsent = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission with file upload
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Log the profile data (in real implementation, this would be sent to backend)
      console.log('Profile submitted:', {
        ...formData,
        resume: formData.resume?.name,
        coverLetter: formData.coverLetter?.name
      });

      setSubmitStatus('success');

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Profile submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof ProfileData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));

    // Clear error when file is selected
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: "" }));
    }
  };

  const removeFile = (fieldName: 'resume' | 'coverLetter') => {
    setFormData(prev => ({ ...prev, [fieldName]: null }));
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16">
          <div className="container">
            <h1 className="heading-xl text-center mb-4">Submit Your Profile</h1>
            <p className="body-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Let us help you find your next opportunity in biotech. Submit your profile and we'll match you with relevant positions.
            </p>
          </div>
        </section>

        {/* Success/Error Notifications */}
        {submitStatus !== 'idle' && (
          <section className="py-4">
            <div className="container max-w-2xl mx-auto">
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800">Profile Submitted Successfully!</h3>
                    <p className="text-green-700">Thank you for submitting your profile. We'll review it and contact you when relevant opportunities arise.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800">Submission Failed</h3>
                    <p className="text-red-700">There was an error submitting your profile. Please try again or email us directly at info@solarapartners.io</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="container max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  netlify
                  data-netlify="true"
                  name="profile-submission"
                  encType="multipart/form-data"
                >
                  {/* Hidden input for Netlify */}
                  <input type="hidden" name="form-name" value="profile-submission" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium">First Name*</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium">Last Name*</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">Email*</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">Phone*</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium">Current Location*</label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State/Country"
                      required
                      className={errors.location ? "border-red-500" : ""}
                    />
                    {errors.location && <p className="text-sm text-red-600">{errors.location}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="block text-sm font-medium">Current Job Title*</label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g., Senior Research Scientist"
                      required
                      className={errors.jobTitle ? "border-red-500" : ""}
                    />
                    {errors.jobTitle && <p className="text-sm text-red-600">{errors.jobTitle}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium">Years of Experience*</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.experience ? "border-red-500" : ""}`}
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="16+">16+ years</option>
                    </select>
                    {errors.experience && <p className="text-sm text-red-600">{errors.experience}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="skills" className="block text-sm font-medium">Key Skills & Expertise</label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="List your key skills, technologies, and areas of expertise (comma separated)"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="block text-sm font-medium">LinkedIn Profile URL</label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://www.linkedin.com/in/yourprofile"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Resume/CV*</label>
                    {!formData.resume ? (
                      <div className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? "border-red-500" : "border-border"}`}>
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <label htmlFor="resume" className="cursor-pointer">
                          <span className="text-accent font-medium">Choose file</span> or drag and drop
                          <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'resume')}
                            className="hidden"
                          />
                        </label>
                        <p className="text-sm text-muted-foreground mt-2">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    ) : (
                      <div className="border rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Upload className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium">{formData.resume.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile('resume')}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    {errors.resume && <p className="text-sm text-red-600">{errors.resume}</p>}
                  </div>

                  {/* Cover Letter Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Cover Letter (Optional)</label>
                    {!formData.coverLetter ? (
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <label htmlFor="coverLetter" className="cursor-pointer">
                          <span className="text-accent font-medium">Choose file</span> or drag and drop
                          <Input
                            id="coverLetter"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'coverLetter')}
                            className="hidden"
                          />
                        </label>
                        <p className="text-sm text-muted-foreground mt-2">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    ) : (
                      <div className="border rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Upload className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium">{formData.coverLetter.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile('coverLetter')}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="jobType" className="block text-sm font-medium">Preferred Job Type</label>
                    <select
                      id="jobType"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select job type</option>
                      <option value="permanent">Permanent</option>
                      <option value="contract">Contract</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="salary" className="block text-sm font-medium">Salary Expectations</label>
                    <Input
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="e.g., $120k - $150k"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks notice</option>
                      <option value="1-month">1 month notice</option>
                      <option value="2-months">2+ months</option>
                      <option value="not-looking">Not actively looking</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2">
                    <Input
                      id="privacyConsent"
                      name="privacyConsent"
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4"
                      required
                    />
                    <label htmlFor="privacyConsent" className="text-sm">
                      I agree to the processing of my personal data in accordance with Solara Partners'
                      <Link href="/privacy-policy" className="text-accent hover:underline ml-1">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                  {errors.privacyConsent && <p className="text-sm text-red-600">{errors.privacyConsent}</p>}

                  <Button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Profile..." : "Submit Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
