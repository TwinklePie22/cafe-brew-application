'use client'

import { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContexts";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../../services/api"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"

export default function Products() {
  const { user } = useAuth()
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "" })

  useEffect(() => {
    if (user) {
      fetchProducts()
    }
  }, [user])

  const fetchProducts = async () => {
    try {
      const response = await getProducts()
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleAddProduct = async () => {
    try {
      await addProduct(newProduct)
      setNewProduct({ name: "", description: "", price: "" })
      fetchProducts()
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id)
      fetchProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  if (!user) {
    return <div>Please log in to view products</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Manage Products</h1>
      <div className="mb-6 space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="product-description">Description</Label>
            <Input
              id="product-description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="product-price">Price</Label>
            <Input
              id="product-price"
              type="number"
              step="0.01"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleAddProduct}>
              <PlusIcon className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${parseFloat(product.price).toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="mr-2">
                  <Pencil1Icon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}