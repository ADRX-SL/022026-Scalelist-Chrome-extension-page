import { Globe, Users, CheckCircle, Star, ArrowRight, ChevronDown, Bookmark, Scissors, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import sarahWestwood from "@/assets/sarah-westwood.png";
import scalelistIcon from "@/assets/scalelist-icon.png";
import professionalCover from "@/assets/professional-cover.png";

const SarahMockup = () => (
  <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
    <div className="relative scale-[0.85] origin-center" style={{ width: '460px' }}>
      {/* Browser window */}
      <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden" style={{ width: '320px' }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-primary/30" />
            <div className="h-3 w-3 rounded-full bg-primary/20" />
            <div className="h-3 w-3 rounded-full bg-primary/15" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-gray-200 px-3 py-1 text-xs text-muted-foreground" />
          <img src={scalelistIcon} alt="Scalelist" className="h-6 w-6 rounded" />
        </div>
        {/* Profile content */}
        <div className="p-0">
          <div className="h-20 relative">
            <img src={professionalCover} alt="" className="h-full w-full object-cover" />
            <div className="absolute -bottom-14 left-4">
              <div className="h-32 w-32 rounded-full border-2 border-white overflow-hidden relative">
                <img src={sarahWestwood} alt="Sarah Westwood" className="h-full w-full object-cover" />
                <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
              </div>
            </div>
          </div>
          <div className="px-4 pt-20 pb-3">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-bold text-sm text-foreground">Sarah Westwood</p>
              <span className="text-[10px] text-muted-foreground">1st</span>
            </div>
            <p className="text-xs text-muted-foreground">Growth at Grok</p>
            <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" />Austin, Texas</span>
              <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5" />500+ connections</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Button size="sm" className="rounded-full px-4 text-xs gap-1">Message</Button>
              <Button size="sm" variant="outline" className="rounded-full px-4 text-xs border-primary text-primary gap-1">
                <Scissors className="h-3 w-3" /> Export lead
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Extension panel */}
      <div className="absolute top-12 -right-16 w-64 rounded-xl border border-border bg-white shadow-2xl overflow-hidden">
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-start justify-between mb-2">
            <div className="h-10 w-10 rounded-full shrink-0 overflow-hidden">
              <img src={sarahWestwood} alt="Sarah Westwood" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <Scissors className="h-3.5 w-3.5 text-muted-foreground" />
              <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="rounded bg-primary/10 px-1 text-[8px] font-bold text-primary">FREE</span>
            </div>
          </div>
          <p className="font-bold text-sm text-foreground">Sarah Westwood</p>
          <p className="text-xs text-muted-foreground">Growth at Grok</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Austin, Texas</p>
        </div>
        <div className="px-4 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground flex-1">
            <Scissors className="h-3 w-3" />
            <span>Push to Hubspot</span>
            <ChevronDown className="h-3 w-3 ml-auto" />
          </div>
          <Button size="sm" className="rounded-lg px-3 py-1.5 text-xs gap-1">
            <Play className="h-3 w-3 fill-primary-foreground" /> Add to list
          </Button>
        </div>
        <div className="px-4 py-2">
          <p className="text-[10px] font-semibold text-muted-foreground mb-1 flex items-center gap-1">
            Contact details <ChevronDown className="h-2.5 w-2.5" />
          </p>
          <p className="text-xs font-medium text-primary">s.w@grok.ai</p>
          <p className="text-xs text-foreground mt-0.5">+1 79 349 72 93</p>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({
  title,
  icon: Icon,
  bullets,
  customImage,
}: {
  title: string;
  icon: React.ElementType;
  bullets: string[];
  customImage?: React.ReactNode;
}) => (
  <div className="rounded-2xl bg-card p-8">
    {/* Image placeholder */}
    {customImage ? (
      <div className="mb-6 rounded-xl bg-muted overflow-hidden">
        {customImage}
      </div>
    ) : (
      <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-muted">
        <Icon className="h-16 w-16 text-muted-foreground/40" />
      </div>
    )}
    <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
    <ul className="space-y-3">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Reveal verified emails and mobile numbers on any site or profile
        </p>
        <h2 className="mx-auto mb-12 max-w-3xl text-center text-4xl font-extrabold tracking-tight text-foreground">
          Find Contact Information & Build Targeted Lists Anywhere
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            title="On Professional Profiles"
            icon={Users}
            customImage={<SarahMockup />}
            bullets={[
              "Find emails and phone numbers on Professional profiles instantly",
              "Push leads to your CRM, CSV, or the tool of your choice in one-click",
            ]}
          />
          <FeatureCard
            title="On Any Website"
            icon={Globe}
            bullets={[
              "Extract emails and mobile numbers from any company website",
              "Effortless List Building: Export leads instantly to your CRM or CSV",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
