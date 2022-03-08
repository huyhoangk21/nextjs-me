import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getArticlesBySearch } from '../lib/api';
import { Article } from '../types/article';
import { Pagination } from '../types/pagination';

type SearchContextType = {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  articles: Article[];
  page: Pagination;
  error: boolean;
};

const SearchContext = createContext<SearchContextType>(null!);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<Pagination>(null!);
  const [error, SetError] = useState<boolean>(false);

  useEffect(() => {
    const debouncedTimer = setTimeout(
      () => setDebouncedSearchTerm(searchTerm),
      500
    );
    return () => clearTimeout(debouncedTimer);
  }, [searchTerm]);

  useEffect(() => {
    const getArticles = async () => {
      const { articles, page, error } = await getArticlesBySearch(
        debouncedSearchTerm
      );
      if (articles) setArticles(articles);
      if (page) setPage(page);
      SetError(error);
    };
    getArticles();
  }, [debouncedSearchTerm]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const value = {
    searchTerm,
    onSearchChange,
    articles,
    page,
    error,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
