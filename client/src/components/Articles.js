import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

import { Spinner, Articles as ArticleContainer } from '../components'
import StyledArticles from "./styles/Articles.styled";

const Articles = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { authAxios } = useAppContext()

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await authAxios("/api/article");
        setData(data.articles)
        setIsLoading(true)
      } catch (error) {
        console.log(error)
      }
    }

    getArticles()

  }, [])

  return (
    <StyledArticles>
      {isLoading && <Spinner/>}
      {!isLoading && data.length < 0 && 'There is no created articles'}
      {!isLoading && data.length > 0 && <ArticleContainer data={data} />}
    </StyledArticles>
  );
};

export default Articles;
