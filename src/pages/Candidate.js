import React, {Component} from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {  Button, Card, Col , Row } from 'antd';
const { Meta } = Card;

const candidate =[
    {
        key: '1',
        image: 'https://awsimages.detik.net.id/community/media/visual/2023/04/24/jokowi_169.jpeg?w=700&q=90://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Gerord & Anciez',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s.com'
    },
    {
        key: '2',
        image: 'https://awsimages.detik.net.id/community/media/visual/2023/04/24/jokowi_169.jpeg?w=700&q=90://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Gkentza & Hasweg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s.com'
    }
    ,
    {
        key: '3',
        image: 'https://awsimages.detik.net.id/community/media/visual/2023/04/24/jokowi_169.jpeg?w=700&q=90://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Korle & Sigzaq',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s.com'
    }
]

const Kandidat =()=>{
    
    return(
        <div className='block products'>
            <h2 style={{textAlign: "center"}}>Kandidat Pasangan Calon</h2>
            <Row
            style={{
                height:500,
                // background: "",
                justifyContent: "center"
                
            }}
            >
                {
                    candidate.map(candidate => {
                        return(

                        <Col lg={6}
                    style={{
                        display:'flex',
                        // background: "Yellow",
                    alignItems: "center",
                    justifyContent:"center",
                    flex: 1
                    }}
                    >
                    <div className='content'>
                        <div className='image'>
                        <Card
                            hoverable   
                            style={{ width: 400 }}
                            cover={<img alt="candidate" src={candidate.image} />}
                            size='small'
                            // textAlign='center'
                            // actions={[
                            //     <SettingOutlined key="setting" />,
                            //     <EditOutlined key="edit" />,
                            //     <EllipsisOutlined key="ellipsis" />,
                            // ]}
                            >
                            <Meta title={candidate.title} description={candidate.description}   />
                            
                            <Button type="primary">Vote1</Button>
                        </Card>
                        </div>
                    </div>
                </Col>
                        )
                    })
            }
            </Row>

    </div>
    )
    
}

export default  Kandidat 
