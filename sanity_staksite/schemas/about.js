export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
       {
        name: 'title',
        title: 'Title',
        type: 'string',
       },
       
       {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{type: 'block'}]
       },
       
        // of: [
        //     {
        //         type: 'block', 
        //         marks: {
        //             annotations: [
        //                 {name: 'color', title: 'Color', type: 'color'}
        //             ]
        //         }
        //     }
        // ]
    
    
    ],
    preview: {
        select: {
          title: 'title',
        },
    }
}