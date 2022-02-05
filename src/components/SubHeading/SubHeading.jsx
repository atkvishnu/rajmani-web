import React from 'react';


const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '0.5rem', }}>
    <p className='p__cormorant'>{title}</p>
    {/* <img src={images.spoon} alt="spoon" className="spoon__img" /> */}
    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-wheat-autumn-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="wheat" className="spoon__img"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://img.icons8.com/office/16/000000/chevron-right.png" alt="arrow"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-factory-agriculture-icongeek26-linear-colour-icongeek26.png" alt="factory" className="spoon__img" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://img.icons8.com/office/16/000000/chevron-right.png" alt="arrow"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/128/000000/external-wheat-germany-icongeek26-linear-colour-icongeek26.png" alt="wheat-bag" className="spoon__img" />
  </div>
);

export default SubHeading;
