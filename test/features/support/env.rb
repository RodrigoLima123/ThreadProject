Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :firefox) #definição do browser
    end
    
    Capybara.default_driver = :selenium
    
    Capybara.default_max_wait_time = 60 #tempo limite de execução
    Capybara.app_host = "https://www.linkedin.com/" #endereço da página a ser testada