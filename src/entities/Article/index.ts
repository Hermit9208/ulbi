export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';

export { ArticleList } from './ui/ArticleList/ArticleList';
