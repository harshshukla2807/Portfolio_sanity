import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "projects","experience","testimonial", "contact"].map((item,index) => {
        return (
<a href={`#${item}`} key={item + index} className="app__navigation-dot" style={active === item ? { backgroundColor: '#313BAC' } : { }}>
    <span className="visually-hidden" style={{ display: 'none' }}>{item} dot</span>
</a>

);
      })}
    </div>
  );
};

export default NavigationDots;
