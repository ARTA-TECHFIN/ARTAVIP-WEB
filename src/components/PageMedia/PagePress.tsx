import type { NextPage } from 'next'
import { FC } from 'react'

import {links} from 'src/domains/links'
import {mediaCmsT} from 'src/domains/media'

import {CalendarAccordion} from '../PageInvestor/CalendarAccordion'

type propsT = {
    cms: mediaCmsT
}

const PagePress: FC<propsT> = ({ cms })  =>  {
    const postsYearly = cms.pressPosts
    
    return(
        <div className="arta-container mx-auto">
            {
                postsYearly.map((yearly, index)=> (
                    <CalendarAccordion
                        index={index}
                        key={yearly.year}
                        year={yearly.year}
                        events={yearly.posts.map((r, i) => ({
                            date: new Date(r.date),
                            title: r.title,
                            postPageUrl: `${links.mediaPressPost}/${index}/${i}`
                        }))}
                    />
                ))
            }
        </div>
    )
}

export default PagePress