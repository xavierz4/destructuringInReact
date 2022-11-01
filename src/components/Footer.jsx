import { Avatar } from "./perfil/Avatar";
import { DesingBy } from "./perfil/DesingBy";
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div>
          <Avatar img="https://static.platzi.com/media/avatars/javierst_1f292b68-f5ae-4c23-9590-7f3bb1846a22.jpg" />
          <DesingBy />
          <h4>{year}</h4>
        </div>
       
      </footer>
    </>
  );
};
