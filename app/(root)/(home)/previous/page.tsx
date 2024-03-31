import CallList from "@/components/CallList";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-black/60   ">
      <h1 className="text-3xl font-bold text-blue-1">Previous Calls</h1>

      <CallList type="ended"  />
    </section>
  );
};

export default PreviousPage;
