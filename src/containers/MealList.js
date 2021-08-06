import Meal from '../components/Meal';

function MealList() {
  const meals = ['rice', 'stew', 'chicken'];
  return (
    <div>
      <table>
        <tbody>
          {meals.map((meal) => (
            <Meal meal={meal} key={meal} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MealList;
