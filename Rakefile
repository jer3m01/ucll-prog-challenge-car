require 'fileutils'


def build(lab:, language:, dist_directory:, devmode: true, extra_tests: false)
    mode = devmode ? "development" : "production"
    input_directory = 'src'
    output_directory = "dist/#{dist_directory}"

    if devmode
        puts "Building #{lab} in DEVELOPMENT mode"
    else
        puts "Building #{lab} in production mode"
    end

    puts "Removing #{output_directory}"
    FileUtils.rm_rf output_directory

    puts "Creating dist directory"
    FileUtils.mkdir_p 'dist'

    sleep 1

    puts "Compiling"
    environment_variables = { 'INPUT' => input_directory, 'OUTPUT' => output_directory }
    environment_variables['LANGUAGE'] = language
    system(environment_variables, "npm run build:#{mode}") or abort "Failed to build #{lab}"
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

