interface MenuProps {
  name: string;
  icon: React.FC;
}

const LeftMenu: React.FC<MenuProps> = ({ name, icon }) => {
  const MenuIcon = icon;
  return (
    <div className="py-4 cursor-pointer rounded-lg group transition-all hover:bg-black  px-5 w-64">
      <div className="flex gap-x-4 ">
        <div className="group-hover:text-white">
          <MenuIcon />
        </div>
        <h4 className="text-xl group-hover:text-white">{name}</h4>
      </div>
    </div>
  );
};

export default LeftMenu;
