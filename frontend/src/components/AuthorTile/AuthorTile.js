import './AuthorTile.css';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import ColorUtil from '../../utils/ColorUtil';
import ArticleDetail from '../../blocks/ArticleDetail';
import { Redirect } from 'react-router-dom';
import Bookmark from '../../blocks/Bookmark';
import ShareLink from '../../blocks/ShareLink';

const AuthorTile = ({article, children, author}) => {
  const color = () => ColorUtil.nameToColor(article.authorName);

  const styleOptions = {
    stroke: color(),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }

  if (!article) return <Redirect to="/articles"/>;
  return (
    <div className="author-tile-1 ">
      <div className="l">
        <FaUserCircle className="user-icon"
          size="40px"
          style={styleOptions}
        />
      </div>
      <div>
        <div className='r'>
          <div className="rt">
            <div className="author-name">{article.authorName}</div>
            <div className='share-bookmark'>
              <ShareLink />
              <Bookmark articleId={article.id} />
            </div>
          </div>
          <div className="rb">
            <ArticleDetail article={article}>
              {children}
            </ArticleDetail>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default AuthorTile;