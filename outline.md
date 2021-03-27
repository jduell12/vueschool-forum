# Outline of Vueschool-forum data
- Use Google Cloud Firestore for database for the project 
```
data = {
    categories: [
        id: 'c1',
        name: 'chats',
        forums: [
            'f1'
        ]
    ], 
    forums: [
        {
            id: 'f1',
            name: 'fishing',
            description: 'some description',
            categoryId: 'c1',
            threads: [
                't1'
            ]
        }
    ]
    users: [
        {
            id: 'u1',
            name: 'Alex',

        }
    ],
    threads: [
        { id: 't1',
          title: 'Some title',
          publishedAt: 1681681861,
          posts: [],
          userId: 'u1'
        }
    ], 
    posts: [
        {
            id: 'p1',
            publishedAt: 1681681861, 
            userId: 'u1',
            text: 'Post content',
            threadId: 't1'
        }
    ]
}
```