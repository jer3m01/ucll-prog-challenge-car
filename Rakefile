require 'fileutils'


def build(lab:, language:, dist_directory:, devmode: true, extra_tests: false)
    mode = devmode ? "development" : "production"
    input_directory = 'temp-input'
    output_directory = 'temp-output'
    dist_lab_directory = "dist/#{dist_directory}"

    if devmode
        puts "Building #{lab} in DEVELOPMENT mode"
    else
        puts "Building #{lab} in production mode"
    end

    puts "Removing #{input_directory}"
    FileUtils.rm_rf input_directory

    puts "Removing #{output_directory}"
    FileUtils.rm_rf output_directory

    puts "Removing #{dist_lab_directory}"
    FileUtils.rm_rf dist_lab_directory

    puts "Creating dist directory"
    FileUtils.mkdir_p 'dist'

    sleep 1
    puts "Creating #{input_directory}"
    FileUtils.mkdir input_directory

    files = Dir["./src/*" ]
    files << './src/student.js'
    files << './src/tests.html'
    files << './src/algo-testing-framework'

    puts "Copying files"
    puts files
    FileUtils.cp_r files, input_directory

    puts "Compiling"
    environment_variables = { 'INPUT' => input_directory, 'OUTPUT' => output_directory }
    environment_variables['EXTRATESTS'] = '1' if extra_tests
    environment_variables['LANGUAGE'] = language
    system(environment_variables, "npm run build:#{mode}") or abort "Failed to build #{lab}"

    puts "Moving #{output_directory} to #{dist_lab_directory}"
    FileUtils.mv output_directory, dist_lab_directory

    puts "Removing #{input_directory}"
    FileUtils.rm_r input_directory
end


labs = Dir.chdir('src') do
    Dir['*'].select do |entry|
        File.directory? entry
    end
end.map(&:to_sym)


desc 'Build Car (EN)'
task :car_en, [:mode] do |task, args|
    case args.mode || 'prod'
    when 'dev'
        extra_tests = true
        devmode = true
    when 'prod'
        extra_tests = false
        devmode = false
    else
        abort "Unrecognized mode: should be dev or prod"
    end

    build(
        lab: 'car',
        language: 'en',
        dist_directory: 'car-en',
        devmode: devmode,
        extra_tests: extra_tests
    )
end

desc 'Build Car (NL)'
task :car_nl, [:mode] do |task, args|
    case args.mode || 'prod'
    when 'dev'
        extra_tests = true
        devmode = true
    when 'prod'
        extra_tests = false
        devmode = false
    else
        abort "Unrecognized mode: should be dev or prod"
    end

    build(
        lab: 'car',
        language: 'nl',
        dist_directory: 'car-nl',
        devmode: devmode,
        extra_tests: extra_tests
    )
end

desc 'Build Car (all languages)'
task :car => [:car_en, :car_nl]


desc 'Removes dist'
task :clean do
    FileUtils.rm_rf 'dist'
end
