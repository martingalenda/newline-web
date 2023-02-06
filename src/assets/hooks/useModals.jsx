 // El siguiente hook solo cambia el estado boolean
 import {useState} from 'react';
 
 export const useModals = (initialState = false) => {
 
     let [isActive, setIsActive] = useState(initialState)
 
     let openModal = () => {
         setIsActive(true) 
     }
     let closeModal = () => {
         setIsActive(false)
     }
 
     return [isActive, openModal, closeModal]
 }