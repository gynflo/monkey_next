import Typography from "@/ui/design-system/typography/Typography";
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="space-y-5">
      <Typography variant="display" component="div" theme="primary">
        Coders Gynflo
      </Typography>
      <Typography variant="h1" component="div" theme="secondary">
        Coders Gynflo
      </Typography>
      <Typography variant="lead" component="div">
        Coders Gynflo
      </Typography>
      <Typography variant="body-sm" component="div">
        Coders Gynflo
      </Typography>
      <Typography variant="caption4" component="div">
        Coders Gynflo
      </Typography>
      <Typography variant="caption4" component="div" weight="medium">
        Coders Gynflo
      </Typography>
    </div>
  );
}
