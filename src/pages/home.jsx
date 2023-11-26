import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      home页
      <NavLink to="/login" end>
        login
      </NavLink>
    </div>
  );
};

export default Home;
