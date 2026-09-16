-- The following will change an existed column called 'hourly_page' to 'hourly_pay'
ALTER TABLE employees
CHANGE COLUMN hourly_page hourly_pay DECIMAL(5,2);