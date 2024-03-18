import NextBreadcrumb from "@/components/NextBreadcrumb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={<span> | </span>}
          activeClasses="text-primary font-bold pl-2"
          containerClasses="flex py-5 "
          listClasses="hover:underline mx-2 font-bold text-[#10A0E8]"
          capitalizeLinks
        />
      </div>
      {children}
    </>
  );
}
