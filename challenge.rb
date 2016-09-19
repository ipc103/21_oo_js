# create a person class with attributes of first name, last name, and a method called `full_name` that combines them.

class Person
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end

person = Person.new('Kanye', 'West')
