const Navbar: React.FC = () => {
    return (
      <div className="bg-green-600 shadow p-4 flex justify-between ">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button className="text-white">Logout</button>
      </div>
    );
  };
  
  export default Navbar;
  