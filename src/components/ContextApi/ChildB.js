import ChildC from './ChildC';

function ChildB() {

                                           //Child B act as mediator only between Child A and Child C
                                           
  return (
    <div>
      <ChildC></ChildC>
    </div>
  );
}

export default ChildB;