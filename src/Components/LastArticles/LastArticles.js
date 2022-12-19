import React from 'react'
import { ArticleBox } from '../ArticleBox/ArticleBox'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './LastArticles.css'

export const LastArticles = () => {
    return (
        <section class="articles">
            <div class="container">
                <SectionHeader
                    title={'جدیدترین مقاله'}
                    decs={'پیش به سوی ارتقای دانش'}
                    btnTitle = {'تمامی مقاله ها'} />
                <div class="articles__content">
                    <div class="row">
                        <ArticleBox 
                        img={'images/blog/3.jpg'}
                        title = {'نحوه نصب کتابخانه در پایتون '}
                        desc = {'زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'}
                        link = {'#'}
                        />
                        <ArticleBox 
                        img={'images/blog/4.png'}
                        title = {'بگارگیری روش های آماری'}
                        desc = {'زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'}
                        link = {'#'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
