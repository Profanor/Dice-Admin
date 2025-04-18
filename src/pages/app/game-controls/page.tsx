import PageHeader from "@/components/page-header";
import WeekSelector from "@/components/week-selector";

export default function GameControls() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title="Manage Dice Single"
          breadcrumbs={[{ label: "Games", href: "/" }, { label: "Singles" }]}
          onAction={() => console.log("Request game clicked")}
        />
        <WeekSelector />
      </div>
    </>
  );
}
