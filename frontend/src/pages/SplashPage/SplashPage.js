import './SplashPage.css';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchArticles } from '../../store/articles';
import SplashPageAnimation from '../../components/Animations/SplashPageAnimation';
import Button from '../../components/Button'

let mGrid = [
  [0,0,0,1,1,2,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,2,1,1,1,1,1,0,1,1,1,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1],
  [0,0,0,0,0,0,0,0,0,2,0,0,0,1,1,0],
  [0,0,0,1,1,0,0,2,2,1,2,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,2,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,2,1,2,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
  [0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,2,1,0,1,0,1,1,0]
]


const SplashPage = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector(state => Object.values(state.articles))

  const dummy = '';

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const topSix = useMemo(() => articles.filter(article => article.id <= 6));

  return (
    <>
    <div className="splash">

      <div className="splash-1">
        <div className="splash-1-1">
          <div className="splash-title">
            <h1 className="stay-curious_">Stay curious.</h1>
            <p className="discover-stories_">Discover stories, thinking, and expertise from writers on any topic.</p>
            <Button className="btn get-started_" label="Start reading"/>
          </div>
          <SplashPageAnimation />
        </div>
      </div>

      <div className="splash-2">
        <div className="splash-2-1">
          <div className="trending-header">
            <h6>Trending on Medium</h6>
          </div>
          <div className="trending-articles">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </div>

      <div className="splash-3">
        <div className="splash-3-1">

          <div className="splash-article-feed">Feed

          </div>

          <div className="splash-sidebar">
            <div className="discover-more">Discover

            </div>

            <div className="sidebar-footer">Links

            </div>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default SplashPage;
