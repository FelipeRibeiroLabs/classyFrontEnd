import {Table, Avatar, Modal} from 'antd';

export const CrewColumn = [
    {
        title: 'Avatar',
        key: 'avatar',
        render: (text, crew) => ( 
            <Avatar style={{
              }} size='large' >
                {crew.name.charAt(0).toUpperCase()}
                </Avatar>
        )
    },
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Série',
        dataIndex: 'schoolYear',
        key: 'schoolYear'
    }
]