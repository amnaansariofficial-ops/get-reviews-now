import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Video, Film, Scissors, Music, Wand2, Play } from "lucide-react";

const VideoEditing = () => {
  return (
    <ServicePageTemplate
      title="Professional Video Editing"
      metaDescription="Professional video editing services for businesses. Social media videos, ads, YouTube content, and corporate videos. Fast turnaround and stunning quality."
      heroHeadline="Professional Video Editing That Converts"
      heroSubheadline="🎬 Video Production Experts"
      heroDescription="Transform your raw footage into polished, engaging videos that captivate your audience and drive results. From social media clips to full productions, we handle it all."
      steps={[
        { title: "Upload", description: "Send us your raw footage and assets" },
        { title: "Brief", description: "Share your vision and requirements" },
        { title: "Edit", description: "Our editors work their magic" },
        { title: "Review", description: "Preview and request revisions" },
        { title: "Deliver", description: "Receive your final video files" },
      ]}
      benefits={[
        { icon: <Video className="w-8 h-8" />, title: "Multi-Format Delivery", description: "Get your video optimized for every platform - YouTube, Instagram, TikTok, LinkedIn, and more." },
        { icon: <Film className="w-8 h-8" />, title: "Cinematic Quality", description: "Professional color grading, transitions, and effects that make your content stand out." },
        { icon: <Scissors className="w-8 h-8" />, title: "Fast Turnaround", description: "48-hour turnaround on standard projects. Rush delivery available when you need it." },
        { icon: <Music className="w-8 h-8" />, title: "Audio Mastering", description: "Crystal clear audio with background music, sound effects, and professional voiceover integration." },
        { icon: <Wand2 className="w-8 h-8" />, title: "Motion Graphics", description: "Custom animations, lower thirds, intros, and graphics that elevate your brand." },
        { icon: <Play className="w-8 h-8" />, title: "Engagement Focus", description: "Edited for attention - hook, story, and call-to-action structured for maximum impact." },
      ]}
      whyUsPoints={[
        "48-hour standard turnaround",
        "Unlimited revisions on all plans",
        "4K and 8K editing capability",
        "Licensed music library included",
        "Multi-platform optimization",
        "Dedicated editor assignment",
        "Secure file transfer",
        "100% satisfaction guarantee",
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$149",
          description: "Per video, up to 60 seconds",
          features: [
            "1 video per order",
            "Up to 60 seconds",
            "Basic editing & cuts",
            "Text overlays",
            "Background music",
            "1 revision round",
            "5-day delivery",
          ],
        },
        {
          name: "Professional",
          price: "$349",
          description: "Per video, up to 3 minutes",
          features: [
            "1 video per order",
            "Up to 3 minutes",
            "Advanced editing",
            "Color correction",
            "Motion graphics",
            "Thumbnail design",
            "Unlimited revisions",
            "48-hour delivery",
          ],
          popular: true,
        },
        {
          name: "Monthly",
          price: "$1,499",
          description: "8 videos per month",
          features: [
            "8 videos/month",
            "Up to 5 min each",
            "Full production suite",
            "Dedicated editor",
            "Brand guidelines",
            "Priority support",
            "Same-day rush option",
            "Content strategy",
          ],
        },
      ]}
      testimonials={[
        {
          name: "Chris Taylor",
          role: "YouTuber, 500K+ Subscribers",
          content: "GetReviews edits all my YouTube content. Their quality and turnaround time let me focus on creating while they handle the tedious editing work.",
          rating: 5,
        },
        {
          name: "Sandra Brooks",
          role: "Marketing Manager, SaaS Co",
          content: "Our social media engagement increased 300% after switching to GetReviews for video editing. The quality difference is night and day.",
          rating: 5,
        },
        {
          name: "Derek Huang",
          role: "E-commerce Owner",
          content: "Product videos that actually convert! They understand pacing and storytelling that sells. Our video ads outperform everything else.",
          rating: 5,
        },
      ]}
      faqs={[
        { question: "What file formats do you accept?", answer: "We accept all major video formats including MP4, MOV, AVI, MKV, and more. We can also work with footage from any camera including iPhone, DSLR, and professional cinema cameras." },
        { question: "How do I send my footage?", answer: "We provide secure upload links for smaller files. For larger projects, we support Dropbox, Google Drive, WeTransfer, and Frame.io integration." },
        { question: "What's your turnaround time?", answer: "Standard turnaround is 48 hours for Professional plans and 5 days for Starter. Rush delivery (24 hours) is available for an additional fee." },
        { question: "How many revisions are included?", answer: "Starter includes 1 revision round. Professional and Monthly plans include unlimited revisions until you're completely satisfied." },
        { question: "Do you provide music and sound effects?", answer: "Yes, we have access to a licensed music library with thousands of tracks and sound effects included at no extra cost." },
        { question: "Can you create thumbnails?", answer: "Yes, thumbnail design is included in our Professional and Monthly plans. Additional thumbnails can be ordered separately." },
        { question: "What if I'm not satisfied with the result?", answer: "We offer unlimited revisions on most plans and a 100% satisfaction guarantee. If we can't meet your expectations, we'll refund your payment." },
      ]}
    />
  );
};

export default VideoEditing;
