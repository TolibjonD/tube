import { Stack, Box, Container, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { colors } from "../../constants/colors";
import { Category, Videos } from "../"
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setselectedCategory] = useState("New")
  const [videos, setvideos] = useState([])

  const setselectedCategoryHandler = category => setselectedCategory(category)
  
  useEffect(() => {
      const getData = async () => {
        try {
          const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
          setvideos(data.items)
          
        } catch (error) {
          console.log(error);
          
        }
      }
    getData()
  }, [selectedCategory])

  
  return (
    <Stack>
        <Category setselectedCategoryHandler={setselectedCategoryHandler}
        selectedCategory={selectedCategory}
        />
        <Box
        p={2}
        sx={{height: "90vh"}}
        >
            <Container maxWidth={'90%'}>
            <Typography variant="h4" fontWeight={'bold'} mb={2}>
              { selectedCategory } <span style={{color: colors.secondary}}>videos</span>
            </Typography>
            <Videos videos={videos} />
            </Container>
        </Box>
    </Stack>
  )
}

export default Main