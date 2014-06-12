class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.string :city
      t.string :state
      t.string :description
      t.string :linked_in
      t.string :website
      t.string :github

      t.timestamps
    end
  end
end
