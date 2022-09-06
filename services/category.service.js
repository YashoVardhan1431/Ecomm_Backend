const Category = require('../models/index').Categories;
const getAllCategories = async ()=>{
    const categories = await Category.findAll();
    return categories;  
}

const createCategory = async (data)=>{
    const newCategory = await Category.create({
        name: data.name,
        descripton: data.descripton,
        createdAt :new Date(),
        updatedAt :new Date()
});
    return newCategory;
}

const deleteCategory = async (categoryId)=>{
    const deletedCategory = await Category.destroy({
        where: { id:categoryId }
        
    })
}

const getCategory = async (categoryId) => {
    const response = await Category.findOne({
        where: { id:categoryId }
    })
    return response;
}

const updateCategory = async (categoryId,data) => {
    const updatedCategory = await Category.update(data,{where:{id:categoryId}});
    return updatedCategory;
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategory,
    updateCategory
}