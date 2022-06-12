using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SiteManagementProject.ENTITY.Models;

#nullable disable

namespace SiteManagementProject.DAL.Concrete.Entityframework.Context
{
    public partial class SiteManagementProjectContext : DbContext
    {
        public SiteManagementProjectContext()
        {
        }

        public SiteManagementProjectContext(DbContextOptions<SiteManagementProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Apartment> Apartments { get; set; }
        public virtual DbSet<Bill> Bills { get; set; }
        public virtual DbSet<Flat> Flats { get; set; }
        public virtual DbSet<FlatType> FlatTypes { get; set; }
        public virtual DbSet<Site> Sites { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=ADYLSHA-PC;Database=SiteManagementProject;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Turkish_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Apartment>(entity =>
            {
                entity.Property(e => e.FlatCount)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Site)
                    .WithMany(p => p.Apartments)
                    .HasForeignKey(d => d.SiteId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Apartments_Sites");
            });

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DueDate).HasColumnType("datetime");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Flats)
                    .WithMany(p => p.Bills)
                    .HasForeignKey(d => d.FlatsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Bills_Flats");
            });

            modelBuilder.Entity<Flat>(entity =>
            {
                entity.HasOne(d => d.Apartments)
                    .WithMany(p => p.Flats)
                    .HasForeignKey(d => d.ApartmentsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Flats_Apartments");

                entity.HasOne(d => d.FlatType)
                    .WithMany(p => p.Flats)
                    .HasForeignKey(d => d.FlatTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Flats_FlatTypes");

                entity.HasOne(d => d.Users)
                    .WithMany(p => p.Flats)
                    .HasForeignKey(d => d.UsersId)
                    .HasConstraintName("FK_Flats_Users");
            });

            modelBuilder.Entity<FlatType>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Site>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.CarPlate)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenId)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
