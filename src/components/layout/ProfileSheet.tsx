import { User, Mail, Phone, LogOut, Settings, HelpCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

interface ProfileSheetProps {
  children: React.ReactNode;
}

const ProfileSheet = ({ children }: ProfileSheetProps) => {
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} feature coming soon!`,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="bg-card border-border">
        <SheetHeader>
          <SheetTitle className="text-foreground font-display">Profile</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center glow-gold mb-4">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Guest User
            </h3>
            <p className="text-sm text-muted-foreground">GES 2025 Participant</p>
          </div>

          <Separator className="bg-border" />

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">guest@ges2025.in</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">+91 98765 43210</span>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Actions */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-secondary"
              onClick={() => handleAction("Settings")}
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground hover:bg-secondary"
              onClick={() => handleAction("Help & Support")}
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:bg-destructive/10"
              onClick={() => handleAction("Sign Out")}
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
