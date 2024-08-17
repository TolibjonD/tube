import { Stack } from '@mui/material'
import React from 'react'
import { category } from "../../constants"
import { colors } from "../../constants/colors"

const Category = ({setselectedCategoryHandler, selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{
        overflow: 'scroll'
    }}>
        { category.map(item => (
            <button key={item.name}
            onClick={() => setselectedCategoryHandler(item.name)}
            className='category_btn'
            style={{
                backgroundColor: item.name === selectedCategory && colors.secondary,
                color: item.name === selectedCategory && '#fff',
            }}
            >
                <span style={{color: item.name === selectedCategory ? '#fff' : colors.secondary, marginRight: '15px'}}>{item.icon}</span>
                <span style={{opacity: '1'}}>{item.name}</span>
            </button>
        )) }
    </Stack>
  )
}

export default Category