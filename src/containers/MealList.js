function MealList() {
  const meals = ['rice', 'stew', 'chicken']
  return (
    <div>
      <table>
        <tbody>
          {meals.map((meal) => (
            <Meal meal={meal} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MealList;