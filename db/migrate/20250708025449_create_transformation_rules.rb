class CreateTransformationRules < ActiveRecord::Migration[8.0]
  def change
    create_table :transformation_rules do |t|
      t.string :name
      t.string :rule_type
      t.text :body
      t.boolean :is_enabled, default: true

      t.timestamps
    end
  end
end
