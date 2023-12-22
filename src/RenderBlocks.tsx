import RenderBlockComponent from './RenderBlockComponent';

export default ({content}:{ content:any[]}) => {
  { 
    // return [RenderBlockComponent(content[0])];
    return content.map((el: any) => RenderBlockComponent(el));
  }
};
