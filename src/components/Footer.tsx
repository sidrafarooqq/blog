const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2">
      <p className="text-xs">
        © {new Date().getFullYear()} My Blog. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
