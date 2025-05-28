import { useEffect, useState } from "react"
import "../style/style.css"
import axiosInstance from "../services/axiosInstance";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

interface Product{
    id: number,
    title: string,
    price: number,
    brand: string,
    thumbnail: string
}

const Home = () => {

    const[currentPage, setCurrentPage] = useState<number>(() => {
        const savedPage = localStorage.getItem('page');
        return savedPage ? Number(savedPage) : 0;
    })

    const [product, setProducts] = useState<Product[]>(() => {
        const savedProducts = localStorage.getItem("data");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    const fecthData = () : void => {
        const savedProducts = localStorage.getItem("data");
        if(savedProducts){
            return;
        }
        axiosInstance.get<{products : Product[]}>('')
        .then(res => {
            // console.log(res.data);
            setProducts(res.data.products);
            localStorage.setItem("data", JSON.stringify(res.data.products));
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fecthData();
    },[])

    useEffect(() => {
        localStorage.setItem("page", String(currentPage))
    }, [currentPage])

    const handlePrev = () => {
        setCurrentPage(prev => prev - 1);
    }
    const handleNext = () => {
        setCurrentPage(prev => prev + 1);
    }
    const handlePageChange = (n : number) => {
        setCurrentPage(n)
    }

    const PAGE_SIZE : number = 10;
    const totalProducts : number = product.length;
    const total : number = Math.ceil(totalProducts / PAGE_SIZE);
    const start : number =  currentPage * 10;
    const end : number = start + 10;

  return (
    <div>
        <h1>Products Management</h1>
        <div className="container">
            <div className="product-container">
                {product.slice(start, end).map((item) => {
                    return <ProductCard key={item.id}
                            title = {item.title}
                            image = {item.thumbnail}
                            brand = {item.brand}
                            price = {item.price} />
                })}
            </div>
        </div>
        <Pagination 
            handlePrev = {handlePrev}
            handleNext = {handleNext}
            handlePageChange = {handlePageChange}
            currentPage = {currentPage}
            total = {total} />
            
    </div>
  )
}

export default Home