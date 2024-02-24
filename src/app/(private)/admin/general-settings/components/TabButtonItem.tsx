export default function TabButtonItem({ tab, onClick, active }: { tab: string; onClick: () => void; active: boolean }) {
  const classNames = `uppercase cursor-pointer ${!active && "btn-outline"} btn btn-primary btn-sm rounded-md mb-2`;

  return (
    <div onClick={onClick} className={classNames}>
      {tab}
    </div>
  );
}
