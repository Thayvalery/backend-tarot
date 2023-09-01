import React, { useState, useEffect } from 'react';
import FormuModal from './FormuModal';
 

export const FormuContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Abre el modal después de 5000 milisegundos (5 segundos)
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <FormuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default FormuContainer;