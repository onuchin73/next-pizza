'use client'

import React from "react";
import { useIntersection } from 'react-use'

import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from ".";
import { useCategoryStore } from "@/store";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    listClassName?: string;
    className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    React.useEffect(()=>{
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold md-5"></Title>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => (
                    <ProductCard key={product.id} id={product.id} name={product.name} price={product.items[0].price} imageUrl={product.imageUrl}></ProductCard>
                ))}
            </div>
        </div>
    )
}