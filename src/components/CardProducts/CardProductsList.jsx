import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CardProduct } from "./CardProducts";
import { db, collection, getDocs } from '../../../firebase';
import '../../styles/CardProductsList.css';

export function CardProductsList() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const querySnapshot = await getDocs(collection(db, "Productos"));
            const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setServices(servicesData);
        };

        fetchServices();
    }, []);

    const filteredServices = category
        ? services.filter(service => service.category === category)
        : services;

    const list = filteredServices.map((product) => (
        <CardProduct
            key={product.id}
            {...product}
        />
    ));

    return (
        <div>
            {list}
        </div>
    );
}